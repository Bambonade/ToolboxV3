app.component('drawer', {
    props: {
        tool: Array,
    },

    methods: {
        removeItem(item) {
            this.$emit('remove-item', item)
        },

        editItem(item, newItem) {
            this.$emit('edit-drawer', item, newItem);
        }
    },

    computed: {},

    template: `
        <q-btn color="secondary" label="TEST DRAWER" style="width: 280px;">
                        <q-menu fit>
                            <q-list style="min-width: 100px">
                                <q-item clickable>
                                    <q-item-section>
                                    <tool
                                    v-for="tool in tools"
                                    :tool="tool"
                                    :key="tool.id"
                                    @edit-this-item="editItem"
                                    @remove-item="removeItem"
                                    ></tool>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-menu>
                    </q-btn>
    `
});
