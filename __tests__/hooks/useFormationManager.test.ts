import { renderHook, act } from '@testing-library/react';
import { useFormationManager } from '@/src/fonctionnalites/dashboard/hooks/useFormationManager';
import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock Firebase config to force localStorage mode
vi.mock('@/src/lib/firebase/config', () => ({
  isFirebaseConfigured: false,
}));

describe('useFormationManager', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with empty formations if localStorage is empty', () => {
    const { result } = renderHook(() => useFormationManager());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.formations).toEqual([]);
  });

  it('should expose modal state and form controls', () => {
    const { result } = renderHook(() => useFormationManager());

    expect(result.current.showModal).toBe(false);
    expect(result.current.editingId).toBeNull();
    expect(result.current.form.title).toBe('');
  });

  it('should open and close the add modal', () => {
    const { result } = renderHook(() => useFormationManager());

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
    const { result } = renderHook(() => useFormationManager());

    act(() => {
      result.current.updateField('title', 'Nouvelle Formation');
      result.current.updateField('desc', 'Description de la formation');
    });

    expect(result.current.form.title).toBe('Nouvelle Formation');
    expect(result.current.form.desc).toBe('Description de la formation');
  });

  it('should add a formation via handleSubmit in localStorage mode', async () => {
    const { result } = renderHook(() => useFormationManager());

    act(() => {
      result.current.openAdd();
      result.current.updateField('title', 'Test Formation');
      result.current.updateField('desc', 'Description test');
    });

    const mockEvent = { preventDefault: () => {} } as React.FormEvent;

    await act(async () => {
      await result.current.handleSubmit(mockEvent);
    });

    expect(result.current.formations.length).toBe(1);
    expect(result.current.formations[0].title).toBe('Test Formation');
    expect(result.current.showModal).toBe(false);
  });

  it('should delete a formation in localStorage mode', async () => {
    const mockFormations = [{ id: 999, title: 'To Delete', description: 'test' }];
    localStorage.setItem('local_courses', JSON.stringify(mockFormations));

    const { result } = renderHook(() => useFormationManager());

    await act(async () => {
      await result.current.handleDelete(999);
    });

    expect(result.current.formations.length).toBe(0);
  });
});
