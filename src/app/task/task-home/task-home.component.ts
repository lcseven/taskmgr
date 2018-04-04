import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
  lists = [
    {
      id:1,
      name: "待办",
      tasks : [
        {
          id: 1,
          desc: "任务一 : 去星巴克买杯咖啡",
          owner: {
            id:1,
            name:"张三",
            avatar: '',
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: "任务二 : 去星巴克买杯咖啡",
          owner: {
            id:2,
            name:"李四",
            avatar: '',
          },
          dueDate: new Date(),
        },
       
      ]
    },
    {
      id:2,
      name: "进行中",
      tasks : [
        {
          id: 1,
          desc: "任务一 : 去水果店买水果",
          owner: {
            id:3,
            name:"王五",
            avatar: '',
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: "任务二 : 去衣服店买衣服",
          owner: {
            id:4,
            name:"小明",
            avatar: '',
          },
          dueDate: new Date(),
        },
       
      ]
    },
    {
      id:3,
      name: "已完成",
      tasks : [
        {
          id: 1,
          desc: "任务一 : 给自己买手机",
          owner: {
            id:3,
            name:"王五",
            avatar: '',
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: "任务二 : 和朋友吃饭",
          owner: {
            id:4,
            name:"小明",
            avatar: '',
          },
          dueDate: new Date(),
        },
       
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
