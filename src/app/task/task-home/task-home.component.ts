import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
  lists = [
    {
      id: 1,
      name: "待办",
      tasks: [
        {
          id: 1,
          desc: "任务一 : 去星巴克买杯咖啡",
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: "张三",
            avatar: 'avatar1',
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 2,
          desc: "任务二 : 去做ppt",
          completed: false,
          priority: 2,
          owner: {
            id: 2,
            name: "李四",
            avatar: 'avatar2',
          },
          dueDate: new Date(),
          reminder: new Date(),
        },

      ]
    },
    {
      id: 2,
      name: "进行中",
      tasks: [
        {
          id: 1,
          desc: "任务一 : 去水果店买水果",
          completed: false,
          priority: 2,
          owner: {
            id: 3,
            name: "王五",
            avatar: 'avatar3',
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: "任务二 : 去衣服店买衣服",
          completed: false,
          priority: 1,
          owner: {
            id: 4,
            name: "小明",
            avatar: 'avatar4',
          },
          dueDate: new Date(),
        },

      ]
    },
    {
      id: 3,
      name: "已完成",
      tasks: [
        {
          id: 1,
          desc: "任务一 : 给自己买手机",
          completed: true,
          priority: 2,
          owner: {
            id: 3,
            name: "王五",
            avatar: 'avatar3',
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: "任务二 : 和朋友吃饭",
          completed: true,
          priority: 3,
          owner: {
            id: 4,
            name: "小明",
            avatar: 'avatar4',
          },
          dueDate: new Date(),
        },

      ]
    }
  ]
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent)
  }
  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}})
  }
}
