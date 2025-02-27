import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addBuilding, avaiableBuildings, Building } from '@space-economy-manager/buildings';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-building-selection',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './building-selection.component.html',
  styleUrl: './building-selection.component.css',
})
export class BuildingSelectionComponent {
  buildings = avaiableBuildings;
  selectedBuildingType = '';

  constructor(private store: Store) {}

  addBuilding() {
    if(!this.selectedBuildingType) return;

    const selectedBuilding = this.buildings.find(b => b.type === this.selectedBuildingType);
    if(!selectedBuilding) return;

    const newBuilding: Building = {
      id: crypto.randomUUID(),
      type: selectedBuilding.type,
      level: 1, // Startlevel ist immer 1
      requiredColonists: selectedBuilding.requiredColonists,
      isActive: false, // Gebäude starten inaktiv
    };

    this.store.dispatch(addBuilding({ building: newBuilding }));
    console.log(`🏗️ Building added: ${newBuilding.type}`);
  }
}
