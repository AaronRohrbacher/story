import { Injectable } from '@angular/core';
import { Story } from './story.model';
import { STORIES } from './mock-stories';



@Injectable()
export class StoryService {

  constructor() { }

  getStories() {
    return STORIES;
  }

  getStoryById(storyId: number){
  for (var i = 0; i <= STORIES.length - 1; i++) {
    if (STORIES[i].id === storyId) {
      return STORIES[i];
    }
  }
}

}
