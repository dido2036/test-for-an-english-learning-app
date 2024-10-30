import { EventData, Page } from '@nativescript/core';
import { QuizViewModel } from '../../viewmodels/quiz-view-model';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new QuizViewModel();
}