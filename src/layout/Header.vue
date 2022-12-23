<template>
    <a-layout-header class="header-container">
        <div class="header-container-left"></div>
        <div class="header-container-right">
            <a-dropdown v-model:visible="visible">
                <span class="item">
                    <a-badge :count="unReadCount">
                        <bell-outlined style="padding: 4px;" />
                    </a-badge>
                </span>
                <template #overlay>
                    <a-card class="notify-card">
                        <template #title>
                            <h4 class="notify-card-title">消息通知</h4>
                        </template>
                        <template #cover>
                            <div class="notify-card-cover">
                                <a-empty description="暂无未读消息" />
                            </div>
                            <div class="notify-card-footer">
                                    <div v-if="unReadCount>0" @click="readAll" class="notify-card-footer-left">
                                    标记已读
                                </div>
                                <div class="notify-card-footer-right">
                                    查看更多
                                </div>                        
                            </div>
                        </template>
                    </a-card>
                </template>
            </a-dropdown>


            <a-divider type="vertical" class="divider" />

            <a-dropdown>
                <span class="item user">
                    <img src="@/assets/image/user.png">
                    <span class="text">Jie Ma</span>
                </span>
                <template #overlay>
                    <a-menu>
                        <a-menu-item>
                            <template #icon>
                                <user-outlined />
                            </template>
                            <a href="javascript:;">个人中心</a>
                        </a-menu-item>
                        <a-menu-item>
                            <template #icon>
                                <setting-outlined />
                            </template>
                            <a href="javascript:;">个人设置</a>
                        </a-menu-item>
                        <a-menu-item>
                            <template #icon>
                                <logout-outlined />
                            </template>
                            <a href="javascript:;">退出登录</a>
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>

            <a-divider type="vertical" class="divider" />

            <a-dropdown>
                <span class="item lang">
                    <global-outlined />
                </span>
                <template #overlay>
                    <a-menu>
                        <a-menu-item>
                            <a href="javascript:;">简体中文</a>
                        </a-menu-item>
                        <a-menu-item>
                            <a href="javascript:;">English</a>
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>

        </div>
    </a-layout-header>
</template>

<script setup lang="ts">
    import {ref}  from "vue"
    const visible = ref(false); //菜单显示
    const unReadCount = ref(12)

    function readAll(){
        unReadCount.value = 0;
    }

</script>

<style lang="scss">
.notify-card {
    width: 330px;
    border-radius: 5px;

    &-title {
        text-align: center;
        width: 100%;
        font-size: 1.6rem;
        font-weight: 600;
        padding: 8px;
        border-bottom: 1px solid #f0f0f0;
    }

    &-cover {
        height: 300px;
        padding: 8px;
    }

    &-footer {
        display: flex;
        flex-wrap: nowrap;
        height: 36px;
        line-height: 36px;
        border-top: 1px solid #f0f0f0;
        &-left {
            display: inline-block;
            text-align: center;
            min-width: 50%;
            position: relative;
            cursor: pointer;
            transition: 0.8s;
            &::after{
                content: "|"; 
                position: absolute;
                right: 0px;
                color: #f0f0f0;
            }
        }

        &-right {
            display: inline-block;
            text-align: center;
            min-width: 50%;
            cursor: pointer;
            flex: 1;
        }
    }

    &-actions {
        li {
            list-style: none;
        }
    }
}
</style>

<style scoped lang="scss">
.header-container {
    display: flex;
    background-color: #fff;
    width: 100%;

    .divider {
        border-right: 1px solid rgba($color: #000000, $alpha: 0.2);
    }

    &-left {
        flex: 1 1 0%;
    }

    &-right {
        text-align: right;

        .item {
            height: 64px;
            line-height: 64px;
            display: inline-block;
            padding: 0 20px;
            cursor: pointer;
        }

        .user {
            img {
                margin-right: 8px;
                display: inline-block;
                width: 28px;
                height: 28px;
                position: relative;
                top: -2px
            }

            .text {
                height: 28px;
                line-height: 28px;
                display: inline-block;
            }
        }
    }
}
</style>