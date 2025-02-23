import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ResourcesState } from './resources.state';

export const selectResources = createFeatureSelector<ResourcesState>('resources');

export const selectFood = createSelector(selectResources, (state) => state.food);
export const selectWater = createSelector(selectResources, (state) => state.water);
export const selectEnergy = createSelector(selectResources, (state) => state.energy);
