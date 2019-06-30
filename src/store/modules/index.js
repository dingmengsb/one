const state={ //原始数据
    longitude:113.324520,
    latitude:23.099994,
};
const getters={ //派生数据
    
};

const actions={ //异步改变
  getLocation({commit},payload){
    wx.getLocation({
        type: 'wgs84',
        success (res) {
        commit("upLocation",res);
        }
      })
  }
};

const mutations={// 同步改变
  upLocation(state,payload){
      state.longitude=payload.longitude,
      state.latitude=payload.latitude
  }
};

export default {
 namespaced:true,
 state,
 getters,
 actions,
 mutations
}
