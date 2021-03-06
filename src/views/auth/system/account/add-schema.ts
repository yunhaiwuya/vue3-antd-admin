import {FormSchema} from "@/types/schema";
import {getAdminRole, getAdminRoleAccess} from "@/api/system/role";

export const addSchema: FormSchema = {
    formItem: [
        {
            type: "input",
            label: "用户名",
            field: "username",
            value: '',
            props: {
                placeholder: "请输入用户名"
            },
            rules: [
                {
                    required: true,
                    message: "用户名不能为空"
                }
            ]
        },
        {
            type: "input",
            label: "密码",
            field: "password",
            value: "",
            props: {
                type: 'password',
                placeholder: "请输入密码"
            },
            rules: [
                {
                    "required": true,
                    "message": "密码不能为空"
                }
            ]
        },
        {
            type: "checkbox",
            label: "角色",
            field: "roles",
            value: [],
            options: [],
            loading: true,
            asyncOptions: async () => { // 异步数据回调
                // 获取角色列表
                const {data} = await getAdminRole({})
                return data.map(item => ({
                    label: item.title,
                    value: item.id
                }))
            }
        }
    ]
}


