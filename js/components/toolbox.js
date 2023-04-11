
app.component('toolbox', {
    template: `
      <q-page-container class="q-mt-lg">
            <div class="q-pa-md">
                <div class="q-gutter-md">
                    <drawer :tools="tools" @edit-drawer="editDrawer"
                            @remove-item="removeFromDrawer"></drawer>
                </div>
            </div>
        </q-page-container>
    `
});