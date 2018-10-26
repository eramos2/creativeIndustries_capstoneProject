<template>
    <!-- cart page content -->
            <div class="login-page-area">
                <div class="container">
                    <div class="login-area">
                    <login-new-customer> </login-new-customer>

                    </div>
                    </div>
            </div>

</template>

<script>
    import LoginNewCustomer from './LoginNewCustomer.vue'

    export default{
        components: {
            loginNewCustomer: LoginNewCustomer
        }
    }
</script>

<style>
    
</style>