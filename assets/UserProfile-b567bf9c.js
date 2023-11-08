import { E as k } from './el-button-6b8e91f4.js'
import { a as U, E as w } from './el-col-0bcda2cd.js'
import { E as x, a as y } from './el-form-item-653e1bb3.js'
import { E as C } from './el-input-07d332e9.js'
import { P as I } from './PageContainer-d04b527c.js'
import {
  u as B,
  r as m,
  o as P,
  c as R,
  b as l,
  d as e,
  f as S,
  b$ as $
} from './index-6f47666e.js'
import './_baseClone-c5224b31.js'
const H = {
  __name: 'UserProfile',
  setup(q) {
    const {
        user: { username: s, nickname: i, email: d, id: p },
        getUser: f
      } = B(),
      a = m({ username: s, nickname: i, email: d, id: p }),
      _ = {
        nickname: [
          { required: !0, message: '请输入用户昵称', trigger: 'blur' },
          {
            pattern: /^\S{2,10}$/,
            message: '昵称必须是2-10位的非空字符串',
            trigger: 'blur'
          }
        ],
        email: [
          { required: !0, message: '请输入用户邮箱', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ]
      },
      u = m(null),
      c = () => u.value.validate(),
      g = async () => {
        await c(), await $(a.value), f()
      }
    return (F, t) => {
      const n = C,
        r = x,
        b = k,
        v = y,
        V = U,
        E = w
      return (
        P(),
        R(
          I,
          { title: '基本资料' },
          {
            default: l(() => [
              e(E, null, {
                default: l(() => [
                  e(
                    V,
                    { span: 12 },
                    {
                      default: l(() => [
                        e(
                          v,
                          {
                            model: a.value,
                            rules: _,
                            ref_key: 'formRef',
                            ref: u,
                            'label-width': '100px',
                            size: 'large'
                          },
                          {
                            default: l(() => [
                              e(
                                r,
                                { label: '登录名称' },
                                {
                                  default: l(() => [
                                    e(
                                      n,
                                      {
                                        modelValue: a.value.username,
                                        'onUpdate:modelValue':
                                          t[0] ||
                                          (t[0] = (o) =>
                                            (a.value.username = o)),
                                        disabled: ''
                                      },
                                      null,
                                      8,
                                      ['modelValue']
                                    )
                                  ]),
                                  _: 1
                                }
                              ),
                              e(
                                r,
                                { label: '用户昵称', prop: 'nickname' },
                                {
                                  default: l(() => [
                                    e(
                                      n,
                                      {
                                        modelValue: a.value.nickname,
                                        'onUpdate:modelValue':
                                          t[1] ||
                                          (t[1] = (o) => (a.value.nickname = o))
                                      },
                                      null,
                                      8,
                                      ['modelValue']
                                    )
                                  ]),
                                  _: 1
                                }
                              ),
                              e(
                                r,
                                { label: '用户邮箱', prop: 'email' },
                                {
                                  default: l(() => [
                                    e(
                                      n,
                                      {
                                        modelValue: a.value.email,
                                        'onUpdate:modelValue':
                                          t[2] ||
                                          (t[2] = (o) => (a.value.email = o))
                                      },
                                      null,
                                      8,
                                      ['modelValue']
                                    )
                                  ]),
                                  _: 1
                                }
                              ),
                              e(r, null, {
                                default: l(() => [
                                  e(
                                    b,
                                    {
                                      type: 'primary',
                                      onClick: t[3] || (t[3] = (o) => g())
                                    },
                                    { default: l(() => [S('提交修改')]), _: 1 }
                                  )
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          },
                          8,
                          ['model']
                        )
                      ]),
                      _: 1
                    }
                  )
                ]),
                _: 1
              })
            ]),
            _: 1
          }
        )
      )
    }
  }
}
export { H as default }
