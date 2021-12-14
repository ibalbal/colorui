import { validatenull } from './validate'
import Vue from "vue";

/**
 * 存储localStorage
 */
export const setStore = (params) => {
	let { name, content, type } = params
	let obj = {
			dataType: typeof (content),
			content: content,
			type: type,
			datetime: new Date().getTime()
	}
	
	// #ifdef MP-WEIXIN
		uni.setStorageSync(name, JSON.stringify(obj));
	// #endif

	// #ifdef H5

	  if (type) window.sessionStorage.setItem(name, JSON.stringify(obj))
	  else window.localStorage.setItem(name, JSON.stringify(obj))
	// #endif
}
/**
 * 获取localStorage
 */

export const getStore = (params) => {
	  let { name, debug } = params
	  let obj = {}

	  let content
	  
	  // #ifdef MP-WEIXIN
		obj = uni.getStorageSync(name)
		if (validatenull(obj)) return
	  // #endif
	  
	  // #ifdef H5
	  obj = window.sessionStorage.getItem(name)
	  if (validatenull(obj)) obj = window.localStorage.getItem(name)
	  if (validatenull(obj)) return
	  // #endif
	  
	  
	  obj = JSON.parse(obj)
	  if (debug) {
		return obj
	  }
	  if (obj.dataType === 'string') {
		content = obj.content
	  } else if (obj.dataType === 'number') {
		content = Number(obj.content)
	  } else if (obj.dataType === 'boolean') {
		content = eval(obj.content)
	  } else if (obj.dataType === 'object') {
		content = obj.content
	  }
	  return content
}
/**
 * 删除localStorage
 */
export const removeStore = params => {
	let { name } = params
	
	// #ifdef MP-WEIXIN
	uni.removeStorageSync(name);
	// #endif
	
	// #ifdef H5
	window.localStorage.removeItem(name)
	window.sessionStorage.removeItem(name)
	// #endif
}

/**
 * 获取全部localStorage
 * 除h5 其他应用未处理
 */
export const getAllStore = (params) => {
	// #ifdef H5
  let list = []
  let { type } = params
  for (let i = 1; i <= window.sessionStorage.length; i++) {
    if (type) {
      list.push({
        name: window.sessionStorage.key(i),
        content: getStore({
          name: window.sessionStorage.key(i),
          type: 'session'
        })
      })
    } else {
      list.push(getStore({
        name: window.localStorage.key(i),
        content: getStore({
          name: window.localStorage.key(i)
        })
      }))
    }
  }

  return list
  // #endif
}

/**
 * 清空全部localStorage
 */
export const clearStore = (params) => {
	
	// #ifdef MP-WEIXIN
	uni.clearStorageSync();
	// #endif
	
	// #ifdef H5
	let { type } = params
	if (type) {
	window.sessionStorage.clear()
	return
	}
	window.localStorage.clear()
	// #endif
}
