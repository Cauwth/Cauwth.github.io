import { P as y } from './PageContainer-d04b527c.js'
import { E } from './el-button-6b8e91f4.js'
import { a as b, E as S } from './el-col-0bcda2cd.js'
import { E as h } from './el-progress-db6ee2cd.js'
import {
  _ as x,
  u as A,
  r as p,
  o as r,
  c as B,
  b as a,
  d as t,
  z as u,
  e as d,
  f as i,
  bO as C,
  E as R,
  aQ as I,
  bP as z,
  p as N,
  k as P,
  g as V
} from './index-6f47666e.js'
/* empty css                   */ import './_baseClone-c5224b31.js'
import './isEqual-97d2888f.js'
const $ = '/assets/avatar-db9fbf44.jpg'
const F = (o) => (N('data-v-e408edd4'), (o = o()), P(), o),
  j = ['src'],
  q = { key: 1, src: $, width: '278' },
  D = F(() => V('br', null, null, -1)),
  L = {
    __name: 'UserAvatar',
    setup(o) {
      const l = A(),
        s = p(l.user.user_pic),
        n = p(null),
        f = (c) => {
          const e = new FileReader()
          e.readAsDataURL(c.raw),
            (e.onload = () => {
              s.value = e.result
            })
        },
        m = async () => {
          await C(s.value), await l.getUser(), R.success('上传成功')
        }
      return (c, e) => {
        const v = h,
          _ = E,
          g = b,
          U = S,
          k = y
        return (
          r(),
          B(
            k,
            { title: '更换头像' },
            {
              default: a(() => [
                t(U, null, {
                  default: a(() => [
                    t(
                      g,
                      { span: 12 },
                      {
                        default: a(() => [
                          t(
                            v,
                            {
                              ref_key: 'uploadRef',
                              ref: n,
                              class: 'avatar-uploader',
                              'auto-upload': !1,
                              'show-file-list': !1,
                              'on-change': f
                            },
                            {
                              default: a(() => [
                                s.value
                                  ? (r(),
                                    u(
                                      'img',
                                      { key: 0, src: s.value, class: 'avatar' },
                                      null,
                                      8,
                                      j
                                    ))
                                  : (r(), u('img', q))
                              ]),
                              _: 1
                            },
                            512
                          ),
                          D,
                          t(
                            _,
                            {
                              type: 'primary',
                              icon: d(I),
                              size: 'large',
                              onClick:
                                e[0] ||
                                (e[0] = (w) =>
                                  n.value.$el.querySelector('input').click())
                            },
                            { default: a(() => [i(' 选择图片 ')]), _: 1 },
                            8,
                            ['icon']
                          ),
                          t(
                            _,
                            {
                              type: 'success',
                              icon: d(z),
                              size: 'large',
                              onClick: e[1] || (e[1] = (w) => m())
                            },
                            { default: a(() => [i(' 上传头像 ')]), _: 1 },
                            8,
                            ['icon']
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
  },
  W = x(L, [['__scopeId', 'data-v-e408edd4']])
export { W as default }
