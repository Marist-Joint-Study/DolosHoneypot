define(["common/topbar/topbar.module"],function(e){e.register.directive("mcTopBar",function(){return{replace:!0,templateUrl:"topbar/topbar.tpl.html"}}),e.register.directive("mcTopBarTasks",function(){return{replace:!0,controller:"topBarTasksCtrl",templateUrl:"topbar/tasks.tpl.html"}}),e.register.directive("mcTopBarNotifications",function(){return{replace:!0,controller:"topBarNotifsCtrl",templateUrl:"topbar/notifications.tpl.html"}}),e.register.directive("mcTopBarMessages",function(){return{replace:!0,controller:"topBarMessagesCtrl",templateUrl:"topbar/messages.tpl.html"}}),e.register.directive("mcTopBarUserMenu",function(){return{replace:!0,controller:"topBarUserMenuCtrl",templateUrl:"topbar/user_menu.tpl.html"}})});