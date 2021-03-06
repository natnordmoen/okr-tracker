<template>
  <div>
    <h1 class="title-1">{{ $t('admin.organization.create') }}</h1>

    <div class="container">
      <validation-observer v-slot="{ handleSubmit }">
        <form id="createOrganization" @submit.prevent="handleSubmit(save)">
          <form-component
            v-model="name"
            input-type="input"
            name="name"
            rules="required"
            :label="$t('fields.name')"
            type="text"
            data-cy="org-name"
          />

          <form-component
            v-model="missionStatement"
            input-type="textarea"
            name="missionStatement"
            :label="$t('fields.missionStatement')"
            rules="required"
            data-cy="org-missionStatement"
          />
        </form>
      </validation-observer>

      <div class="button-row">
        <button class="btn btn--icon btn--pri" form="createOrganization" :disabled="loading" data-cy="btn-createOrg">
          <i class="icon fa fa-fw fa-save" />
          {{ $t('btn.create') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Organization from '@/db/Organization';
import findSlugAndRedirect from '@/util/findSlugAndRedirect';

export default {
  name: 'CreateOrganization',

  data: () => ({
    name: '',
    missionStatement: '',
    loading: false,
  }),

  methods: {
    async save() {
      const { name, missionStatement } = this;
      const data = {
        name: name.trim(),
        missionStatement: missionStatement.trim(),
        archived: false,
      };

      this.loading = true;

      try {
        const orgRef = await Organization.create(data);
        await findSlugAndRedirect(orgRef);
        this.$toasted.show(this.$t('toaster.add.organization'));
      } catch (error) {
        this.$toasted.error(this.$t('toaster.error.organization'));
        throw new Error(error);
      }

      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/_colors';

.container {
  padding: 1rem;
  background: white;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba($color-grey-400, 0.3);

  @media screen and (min-width: bp(s)) {
    width: span(8);
    padding: 1.5rem;
  }

  @media screen and (min-width: bp(m)) {
    width: span(5, 0, span(9));
    padding: 1.5rem;
  }

  @media screen and (min-width: bp(l)) {
    width: span(4, 0, span(10));
    padding: 1.5rem;
  }
}
</style>
