/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { EventListComponent } from './event-list.component';

describe('Component: EventList', () => {
  it('should create an instance', () => {
    let component = new EventListComponent();
    expect(component).toBeTruthy();
  });
});
