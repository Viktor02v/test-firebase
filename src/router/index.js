import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },

	 {
		path: '/register',
		name: 'register',
		// route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('../views/Register.vue')
	 },
	 {
		path: '/sign-in',
		name: 'sign-in',
		// route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('../views/SignIn.vue')
	 },
	 {
		path: '/feed',
		name: 'feed',
		// route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('../views/Feed.vue'),
		meta: {
			requiresAuth: true
		}
	 }

  ]
})

const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const removeListener = onAuthStateChanged(getAuth(), (user) => {
			removeListener();
			resolve(user);
		}, reject);
	})
}

router.beforeEach(async(to, from, next) => {
	if(to.matched.some(record => record.meta.requiresAuth)) {
if(await getCurrentUser()) {
	next();
} else {
	alert('Please sign in');
	next('/');
}
	} else{
		next();
	}

})
export default router
