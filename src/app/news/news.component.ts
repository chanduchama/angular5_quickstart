import { Component, OnInit } from '@angular/core';
import { NewsService } from 'app/news/news.service';
import { News } from 'app/news/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.loadAllNews();
  }

  loadAllNews() {
    this.newsService.getBBCNews().then(news => {
      this.news = news;
    });
  }

}
