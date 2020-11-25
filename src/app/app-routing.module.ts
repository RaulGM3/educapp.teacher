import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./auth/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'options-entity',
    loadChildren: () => import('./options-entity/options-entity.module').then( m => m.OptionsEntityPageModule)
  },
  {
    path: 'school',
    children: [
      {
        path: '',
        loadChildren: () => import('./school/school.module').then( m => m.SchoolPageModule)
      },
      {
        path: 'teachers',
        children: [
          {
            path: '',
            loadChildren: () => import('./school/teachers/teachers.module').then( m => m.TeachersPageModule)
          },
          {
            path: 'add-teacher',
            loadChildren: () => import('./school/teachers/add-teacher/add-teacher.module').then( m => m.AddTeacherPageModule)
          }
        ]
      },
      {
        path: 'subjects',
        children: [
          {
            path: '',
            loadChildren: () => import('./school/subjects/subjects.module').then( m => m.SubjectsPageModule)
          },
          {
            path: 'add-subject',
            loadChildren: () => import('./school/subjects/add-subject/add-subject.module').then( m => m.AddSubjectPageModule)
          }
        ]
      },
      {
        path: 'grades',
        children: [
          {
            path: '',
            loadChildren: () => import('./school/grades/grades.module').then( m => m.GradesPageModule)
          },
          {
            path: 'add-grade',
            loadChildren: () => import('./school/grades/add-grade/add-grade.module').then( m => m.AddGradePageModule)
          }
        ]
      }
    ]
  },
  {
    path: 'editor',
    loadChildren: () => import('./editor/editor.module').then( m => m.EditorPageModule)
  },
  {
    path: 'teacher',
    loadChildren: () => import('./teacher/teacher.module').then( m => m.TeacherPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
