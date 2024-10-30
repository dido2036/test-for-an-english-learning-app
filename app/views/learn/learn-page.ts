import { EventData, Page } from '@nativescript/core';
import { LearnViewModel } from '../../viewmodels/learn-view-model';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new LearnViewModel();
}