<template>
    <div>
        <div class="title">
            部门
        </div>
        <div class="content">
            <el-row class="tac">
                <el-col>
                    <el-menu class="el-menu-vertical-demo">
                        <template v-for="row in orgData.srcData" :key="row.id">
                            <template v-if="!row.children">
                                <el-menu-item :index="row.id" :disabled="defineProps.banReflesh"
                                    @click="clickOrgOption">
                                    <el-icon>
                                        <icon-menu />
                                    </el-icon>
                                    <span>{{ row.name }}</span>
                                </el-menu-item>
                            </template>
                        </template>
                    </el-menu>
                </el-col>
            </el-row>

        </div>
    </div>
</template>





<script lang="ts" setup>
import { reactive, defineProps } from "vue";
import queryOrg from "../api/org";
import { Menu as IconMenu, Location } from '@element-plus/icons-vue'

let defineProps: any = defineProps(['getUserComponentTitle', 'banReflesh'])
let orgData: any = reactive({ srcData: [] })

async function queryData() {
    orgData.srcData = []
    await queryOrg.query().then((data) => {
        orgData.srcData = data
    })
}

const clickOrgOption = (target: any) => {
    if (defineProps.banReflesh) {
        return
    }
    let context = orgData.srcData.find(item => target.index === item.id)
    defineProps.getUserComponentTitle(context)
}
queryData()
</script>


<style scope lang="less">
.title {
    height: 40px;
    width: 100%;
    font-size: 14px;
    line-height: 40px;
    text-align: left;
    border-bottom: 2px solid rgb(232, 232, 232)
}

.content {
    overflow: auto;
}
</style>