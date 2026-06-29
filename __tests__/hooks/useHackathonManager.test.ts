import { renderHook, act } from '@testing-library/react';
import { useHackathonManager } from '@/src/fonctionnalites/dashboard/hooks/useHackathonManager';
import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock Firebase config to force localStorage mode
vi.mock('@/src/lib/firebase/config', () => ({
  isFirebaseConfigured: false,
}));

describe('useHackathonManager', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with default hackathons if localStorage is empty', () => {
    const { result } = renderHook(() => useHackathonManager());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.hackathons.length).toBeGreaterThan(0);
  });

  it('should expose modal state and form controls', () => {
    const { result } = renderHook(() => useHackathonManager());

    expect(result.current.showModal).toBe(false);
    expect(result.current.editingId).toBeNull();
    expect(result.current.form.title).toBe('');
  });

  it('should open and close the add modal', () => {
    const { result } = renderHook(() => useHackathonManager());

    act(() => {
      result.current.openAdd();
    });

    expect(result.current.showModal).toBe(true);
    expect(result.current.editingId).toBeNull();

    act(() => {
      result.current.closeModal();
    });

    expect(result.current.showModal).toBe(false);
  });

  it('should update form fields via updateField', () => {
    const { result } = renderHook(() => useHackathonManager());

    act(() => {
      result.current.updateField('title', 'New Hackathon');
      result.current.updateField('theme', 'AI & Automation');
    });

    expect(result.current.form.title).toBe('New Hackathon');
    expect(result.current.form.theme).toBe('AI & Automation');
  });

  it('should add a hackathon via handleSubmit in localStorage mode', async () => {
    const { result } = renderHook(() => useHackathonManager());
    const initialCount = result.current.hackathons.length;

    act(() => {
      result.current.openAdd();
      result.current.updateField('title', 'Test Hackathon');
      result.current.updateField('date', '01 - 03 Août 2027');
      result.current.updateField('theme', 'Cloud Native');
    });

    const mockEvent = { preventDefault: () => {} } as React.FormEvent;

    await act(async () => {
      await result.current.handleSubmit(mockEvent);
    });

    expect(result.current.hackathons.length).toBe(initialCount + 1);
    expect(result.current.hackathons[0].title).toBe('Test Hackathon');
    expect(result.current.showModal).toBe(false);
  });

  it('should delete a hackathon in localStorage mode', async () => {
    const mockHackathons = [{ id: 999, title: 'To Delete', status: 'a-venir' }];
    localStorage.setItem('local_hackathons', JSON.stringify(mockHackathons));

    const { result } = renderHook(() => useHackathonManager());

    await act(async () => {
      await result.current.handleDelete(999);
    });

    expect(result.current.hackathons.length).toBe(0);
  });
});
