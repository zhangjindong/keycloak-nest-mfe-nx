import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuQuery, MenuService } from '@mfe/web/share/menu/domain';

@Component({
  selector: 'app-menu-sider',
  templateUrl: './menu-sider.component.html',
  styleUrls: ['./menu-sider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuSiderComponent implements OnInit {
  @Input() isCollapsed = false;
  constructor(
    private menuService: MenuService,
    private menuQuery: MenuQuery
  ) {}
  menus$ = this.menuQuery.selectAll();
  ngOnInit(): void {
    this.menuService.get().subscribe();
  }
}
