<template>


    <div class="fixed bottom-0 left-0 w-full flex justify-around p-4 rounded-t-xl shadow-xl" style="background: #0B8800; z-index: 3;">
        <div class="flex flex-col items-center" @click="$router.push('/')">
            <img src="../assets/study.svg" width="35"/>
            <h6 class="mt-2 text-white">Учить</h6>
        </div>

        <div class="flex flex-col items-center" @click="$router.push('/vocabulary')">
            <img src="../assets/vocab.svg" width="35"/>
            <h6 class="mt-2 text-white">Словарь</h6>
        </div>
        
    </div>
    

</template>


<script>

export default {
    name: 'Bottom Bar'
}

</script>