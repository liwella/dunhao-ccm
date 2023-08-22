<template>
  <AppPage :show-footer="false">
    <n-card title="影片详情" size="small" :segmented="true" mt-15 rounded-10>
      <template #footer>
        <n-el>
          <div ref="videoRef" m-auto :style="{ width: '70%' }"></div>
        </n-el>
      </template>
      <template #action>
        <n-spin :show="loading">
          <n-space flex flex-wrap justify-start>
            <n-button
              v-for="(item, index) in playlist"
              :key="index"
              mb-20
              mr-20
              type="primary"
              secondary="true"
              @click="changePlaySource(item.playSources)"
            >
              {{ item.sourceName }}
            </n-button>
          </n-space>
          <n-space v-for="(item, index) in playSource" :key="index">
            <n-card :title="item.playType" flex flex-wrap justify-start>
              <n-button
                v-for="(source, i) in item.playDetailList"
                :key="i"
                primary
                secondary
                mb-20
                mr-20
                @click="changeMovie(source.playUrl)"
              >
                {{ source.playTag }}
              </n-button>
            </n-card>
          </n-space>
        </n-spin>
      </template>
    </n-card>
  </AppPage>
</template>

<script setup>
import { useRoute } from 'vue-router'
import DPlayer from 'dplayer'
import { onMounted } from 'vue'
import Hls from 'hls.js'
import api from './api'

onMounted(() => {
  createPlayer()
  createPlaylist()
})

// 创建播放器
const dp = ref()
const videoRef = ref()
function createPlayer() {
  dp.value = new DPlayer({
    //初始化视频对象
    container: videoRef.value, //指定视频容器节点
    video: {
      url: movie.value.url,
      type: 'customHls',
      customType: {
        customHls: function (video) {
          const hls = new Hls()
          hls.loadSource(video.src)
          hls.attachMedia(video)
        },
      },
    },
  })
}
// 选择影片
const movie = ref({})
function changeMovie(url) {
  dp.value.switchVideo({
    url,
    type: 'customHls',
    customType: {
      customHls: function (video) {
        const hls = new Hls()
        hls.loadSource(video.src)
        hls.attachMedia(video)
      },
    },
  })
}

// 创建播放列表
const route = useRoute()
const loading = ref(false)
const playlist = ref([])
async function createPlaylist() {
  loading.value = true
  const movieId = route.params.id
  if (movieId === ':id') {
    loading.value = false
    return
  }
  const result = await api.getPlaylist({ movieId })
  playlist.value = result?.data
  loading.value = false
}

// 选择播放源
const playSource = ref([])
function changePlaySource(playSources) {
  playSource.value = playSources
}
</script>

<style lang="scss" scoped></style>
