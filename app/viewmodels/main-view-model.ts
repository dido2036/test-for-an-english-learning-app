import { Observable } from '@nativescript/core';
import { LearnViewModel } from './learn-view-model';
import { QuizViewModel } from './quiz-view-model';

export class MainViewModel extends Observable {
    private _learnViewModel: LearnViewModel;
    private _quizViewModel: QuizViewModel;

    constructor() {
        super();
        this._learnViewModel = new LearnViewModel();
        this._quizViewModel = new QuizViewModel();
    }

    get learnViewModel(): LearnViewModel {
        return this._learnViewModel;
    }

    get quizViewModel(): QuizViewModel {
        return this._quizViewModel;
    }
}