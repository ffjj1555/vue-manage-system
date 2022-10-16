<template>
	<div class="sidebar">
		<el-menu
			class="sidebar-el-menu"
			:default-active="onRoutes"
			:collapse="sidebar.collapse"
			background-color="#324157"
			text-color="#bfcbd9"
			active-text-color="#20a0ff"
			unique-opened
			router
		>
			<template v-for="item in items">
				<template v-if="item.subs">
					<el-sub-menu :index="item.index" :key="item.index" v-permiss="item.permiss">
						<template #title>
							<el-icon>
								<component :is="item.icon"></component>
							</el-icon>
							<span>{{ item.title }}</span>
						</template>
						<template v-for="subItem in item.subs">
							<el-sub-menu
								v-if="subItem.subs"
								:index="subItem.index"
								:key="subItem.index"
								v-permiss="item.permiss"
							>
								<template #title>{{ subItem.title }}</template>
								<el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
									{{ threeItem.title }}
								</el-menu-item>
							</el-sub-menu>
							<el-menu-item v-else :index="subItem.index" v-permiss="item.permiss">
								{{ subItem.title }}
							</el-menu-item>
						</template>
					</el-sub-menu>
				</template>
				<template v-else>
					<el-menu-item :index="item.index" :key="item.index" v-permiss="item.permiss">
						<el-icon>
							<component :is="item.icon"></component>
						</el-icon>
						<template #title>{{ item.title }}</template>
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSidebarStore } from '@/store/sidebar';
import { useRoute } from 'vue-router';

const items = [
	{
		icon: 'Odometer',
		index: '1',
		title: '系统首页',
		permiss: '1',
		subs: [
			{
				index: '/dashboard/Workbench',
				title: '工作台',
				permiss: '1'
			},
			{
				index: '/dashboard/analysis',
				title: '分析报告',
				permiss: '1'
			},
		]
	},
	{
		icon: 'Odometer',
		index: '2',
		title: '销售管理',
		permiss: '2',
		subs: [
			{
				index: '/Sales/workbench',
				title: '工作台',
				permiss: '2'
			},
			{
				index: '/Sales/analysis',
				title: '分析报告',
				permiss: '2'
			},
			{
				index: '/Sales/channel',
				title: '销售渠道',
				permiss: '2'
			},
			{
				index: '/Sales/channelPrice',
				title: '渠道价格',
				permiss: '2'
			},
			{
				index: '/Sales/backstagePrice',
				title: '后台价格',
				permiss: '2'
			},
			{
				index: '/Sales/available',
				title: '房态',
				permiss: '2'
			},
		]
	},
	{
		icon: 'Odometer',
		index: '3',
		title: '房源管理',
		permiss: '3',
		subs: [
			{
				index: '/Houses/workbench',
				title: '工作台',
				permiss: '3'
			},
			{
				index: '/Houses/analysis',
				title: '分析报告',
				permiss: '3'
			},
		]
	},
	{
		icon: 'Edit',
		index: '19',
		title: '功能测试',
		permiss: '16',
		subs: [
			{
				index: '/test/AccessToken_myhostex',
				title: 'AccessToken',
				permiss: '19'
			},
			{
				index: '/test/myhostex_price',
				title: 'myhostex_price',
				permiss: '19'
			},
			{
				index: '/upload',
				title: '文件上传',
				permiss: '19'
			},
		]
	},
];

const route = useRoute();
const onRoutes = computed(() => {
	return route.path;
});

const sidebar = useSidebarStore();
</script>

<style scoped>
.sidebar {
	display: block;
	position: absolute;
	left: 0;
	top: 70px;
	bottom: 0;
	overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
	width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
	width: 180;
}
.sidebar > ul {
	height: 100%;
}
</style>
