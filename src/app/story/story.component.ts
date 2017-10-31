import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Story } from '../story.model'
import { StoryService } from '../story.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  providers: [StoryService]
})
export class StoryComponent implements OnInit {
  storyId: number = null;
  storyPoints: number = null;
  storyToDisplay: Story;
  startingPoints: number = 5;

  constructor(private router: Router, private route: ActivatedRoute, private storyService: StoryService) {}
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.storyId = parseInt(urlParameters['id']);
    });
    this.storyToDisplay = this.storyService.getStoryById(this.storyId);
    this.storyPoints = this.storyToDisplay.points;
  }

  nextStory(buttonClicked) {
    if (buttonClicked === "positive") {
      this.startingPoints += this.storyPoints;
    } else {
      this.startingPoints -= this.storyPoints;
    }
    this.router.navigate(['story', this.storyToDisplay.id+1]);
    this.storyToDisplay = this.storyService.getStoryById(this.storyId + 1);
    this.storyPoints = this.storyToDisplay.points;
  }
}
