<template>
    <div>
        <h2 class="text-center">
            Welcome to your
            <a href="https://www.plasmo.com" target="_blank">Plasmo</a> Extension!
        </h2>

        <div class="container">
            <button @click="decrement">
                -
            </button>
            <p>
                <b>{{ state.count }}</b>
            </p>
            <button @click="increment">
                +
            </button>
        </div>
        <Button>aa</Button>
    </div>
    <p v-if="state.action" class="action text-center">
        {{ state.action }}
    </p>
</template>

<script setup lang="ts">
import { Button } from '@vue-macos/core';
import { reactive } from 'vue';
import './assets/style.css';

const state = reactive({ count: 0, action: '' });

function increment () {
    state.count++;
    state.action = 'increment';
}

function decrement () {
    state.count--;
    state.action = 'decrement';
}
</script>

<style>
.container {
    min-width: 470px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 47px;
}
.text-center {
    text-align: center;
}
.action {
    color: #470;
    font-weight: bold;
}
</style>
