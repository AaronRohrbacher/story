import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Story } from '../story.model'
import { StoryService } from '../story.service'

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  providers: [StoryService]
})
export class StoryComponent implements OnInit {
  storyId: number = null;
  storyToDisplay: Story;

  constructor(private route: ActivatedRoute, private storyService: StoryService) {}
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.storyId = parseInt(urlParameters['id']);
    });
    this.storyToDisplay = this.storyService.getStoryById(this.storyId);
  }
}
