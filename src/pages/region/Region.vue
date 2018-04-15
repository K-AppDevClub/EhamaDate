<style lang="scss" scoped >
.page-title {
  text-align: center;
}
</style>
<template>

	<v-ons-page>
		<navbar></navbar>
		<div class="page-content">
			<h3 class="page-title">region page</h3>
		</div>
		<el-tree
  :data="data"
  :props="defaultProps"
  accordion
  @node-click="handleNodeClick">
    </el-tree>
	</v-ons-page>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';

export default {
  name: 'region',
  components: {
    Navbar,
  },
  data() {
    return {
      data: [{
        label: 'Level one 1',
        children: [{
          label: 'Level two 1-1',
          children: [{
            label: 'Level three 1-1-1',
          }],
        }],
      }, {
        label: 'Level one 2',
        children: [{
          label: 'Level two 2-1',
          children: [{
            label: 'Level three 2-1-1',
          }],
        }, {
          label: 'Level two 2-2',
          children: [{
            label: 'Level three 2-2-1',
          }],
        }],
      }, {
        label: '九州',
        children: [{
          label: '福岡',
        }, {
          label: '鹿児島',
        }],
      }],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      this.$router.push({ name: 'recommend' });
      console.log(data);
    },
  },
};
</script>
