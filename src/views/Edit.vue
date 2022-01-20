<template>
    <div class="editor">
        <Header>Edit Memo</Header>
        <textarea name="memo" v-model="memoBody"></textarea>
        <button @click="save">保存</button>
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
export default {
    name: 'edit',
    components: {
        Header
    },
    data: function() {
        return {
            memoBody: ''
        }
    },
    mounted: function(){
        let id = this.$route.params["id"];
        let memo =  this.$store.state.memos.slice().find(memo => memo.id == id);
        this.memoBody = memo.body;
    },
    methods: {
        save: function() {
            this.$store.commit("update", {
                id: this.$route.params["id"],
                body: this.memoBody
            });
            this.$router.push('/');
        }
    }
}
</script>
