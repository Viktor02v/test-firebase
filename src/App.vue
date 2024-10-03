<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()// get a reference to our vue router

const isLoggedIn = ref(false)

let auth;
onMounted(() => {
	auth = getAuth();
	onAuthStateChanged(auth, (user) => {
		if (user) {
			isLoggedIn.value = true;
		} else {
			isLoggedIn.value = false;
		}
	})
})

const handleSignOut = () => {
	signOut(auth).then(() => {
		router.push('/')
		isLoggedIn.value = false
	})
}
</script>

<template>
	<div class="flex flex-col h-screen w-full justify-center items-center">
		<nav>
			<div class="flex gap-4">
				<router-link to="/">Home</router-link>
				<router-link to="/feed">Feed</router-link>
				<router-link to="/register">Register</router-link>
				<router-link to="/sign-in">Sign In</router-link>
				<button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
			</div>
		</nav>
		<RouterView />
	</div>
</template>
