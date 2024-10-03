<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'vue-router';
const email = ref('')
const password = ref('')
const errMsg = ref()// ERROR MESSAGE
const router = useRouter()// get a reference to our vue router

const register = () => {
	signInWithEmailAndPassword(getAuth(), email.value, password.value)
		.then((data) => {
			console.log("Successfully signed in!");

			router.push('/feed')// redirect to the feed

			console.log(auth.currentUser);

		})
		.catch((error) => {
			console.log(error.code);
			switch (error.code) {
				case "auth/invalid-email":
					errMsg.value = "Invalid email";
					break;
				case "auth/user-not-found":
					errMsg.value = "No account with that email was found";
					break;
				case "auth/wrong-password":
					errMsg.value = "Incorrect password";
					break;
				default:
					errMsg.value = "Email or password is incorrect";
					break;
			}
		});
}

const singInWithGoogle = () => {
	const provider = new GoogleAuthProvider();
	signInWithPopup(getAuth(), provider)
		.then((result) => {
			console.log(result.user);
			router.push('/feed')
		})
		.catch((error) => {
			console.log(error.code);
		});
};

</script>

<template>
	<div class="register flex items-center flex-col justify-center">
		<h1>Sign In</h1>
		<p><input type="text" placeholder="Email" v-model="email"></p>
		<p><input type="password" placeholder="Password" v-model="password"></p>
		<p v-if="errMsg">{{ errMsg }}</p>
		<p><button @click="register">Submit</button></p>
		<p><button @click="singInWithGoogle">Sing In With Google</button></p>
	</div>
</template>

<style setup>
.register input {
	display: block;
	margin: 10px 0;
	width: 100%;
	border: 1px solid #ddd;
	padding: 10px;
	border-radius: 4px;
}
</style>