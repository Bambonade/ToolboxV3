app.component('tool', {
    data() {
        return {

        }
    },

    props: {
        tool: Tool,
    },

    computed:{

    },

    mounted(){

    },

    template: `
      <q-item>
      <q-item-section>
      {{ tool.category }} || {{ tool.name }}
      </q-item-section>
      </q-item>
    `
});