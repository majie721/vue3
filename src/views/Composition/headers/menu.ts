import { ref, reactive, type Ref, provide, type InjectionKey } from 'vue';


const MenuSearchFrom = () => {
    const queryForm: System.MenuParam = reactive({
        route_path: undefined,
        title: undefined,
        created_at: []
    });

    const doProvide =  provide('_SearchFromKEY', queryForm)
    

    const config: System.SearchItem[] = [
        {
            type: 'input',
            keyName: 'route_path',
            label: '前端路由',
            allowClear: true,
        },
        {
            type: 'input',
            keyName: 'title',
            label: '菜单名称',
        },
        {
            type: 'timerPicker',
            keyName: 'created_at',
            label: '创建时间',
            valueFormat: 'YYYY-MM-DD',
            format: 'YYYY-MM-DD',
        }
    ]


    return {queryForm,doProvide,config}
}




export default MenuSearchFrom;