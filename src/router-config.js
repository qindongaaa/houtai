import active from './page/active/index.vue'

import activePublic from './page/active/activePublic/index.vue'
import publicpages from './page/active/activePublic/publicpages.vue'

import step1 from './page/active/activePublic/step1.vue'
import step2 from './page/active/activePublic/step2.vue'
import step3 from './page/active/activePublic/step3.vue'
import step4 from './page/active/activePublic/step4.vue'

import totalpages from './page/active/activeManage/totalpages.vue'
import activeManage from './page/active/activeManage/index.vue'
import detail from './page/active/activeManage/detail.vue'


import page1 from './page/active/activeManage/page1.vue'
import page2 from './page/active/activeManage/page2.vue'
import page3 from './page/active/activeManage/page3.vue'
import page4 from './page/active/activeManage/page4.vue'
import page5 from './page/active/activeManage/page5.vue'

import test from './page/test/index.vue'
import test2 from './page/test/test2.vue'
import test3 from './page/test/test3.vue'
import test4 from './page/test/test4.vue'

export default [
  { 
      
      path: '/active', component: active,
      children: [
          { path: ''      , component: totalpages  },
          { 
            path: 'activeManage',component:totalpages,
            children:[
              { path: ''      , component: activeManage  },
              {
                path: 'detail', component: detail,

                children: [
                  {path:'',component: page1},
                  {
                    path: 'page1', component: page1,
                    children: [
                      {path: '', component: step1},
                      {path: 'step1', component: step1},
                      {path: 'step2', component: step2},
                      {path: 'step3', component: step3},
                      {path: 'step4', component: step4}
                    ]
                  },
                  { path: 'page2', component: page2  },
                  { path: 'page3', component: page3  },
                  { path: 'page4', component: page4  },
                  { path: 'page5', component: page5  }
                ]
              },
            ]
          },{
            path:'activePublic',component:publicpages,
            children:[
              {   path:'',component:activePublic,
                  children:[
                    { path: ''     , component: step1  },
                    { path: 'step1', component: step1  },
                    { path: 'step2', component: step2  },
                    { path: 'step3', component: step3  },
                    { path: 'step4', component: step4  }
                  ]
              }
            ]
          }
            
          
      ]
  },
  {
    path:'/test',component:test,
    children:[
      {path:'',component: test2},
      { path: 'test1', component: test2  },
      { path: 'test2', component: test4  },
      { path: 'test3', component: test3  },
    ]
  }
]
