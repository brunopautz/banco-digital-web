<template>
    <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <nuxt-link to="/" class="nav-link">BruBank</nuxt-link> 
                </li>
            </ul>
        </nav>
        <div class="container p-4">
            <Nuxt />
        </div>
    </div>
</template>

<script>
export default {
    name: 'bank'
}
</script>