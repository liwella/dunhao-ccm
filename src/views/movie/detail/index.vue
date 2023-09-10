<template>
  <AppPage :show-footer="false">
    <n-card title="影片详情" size="small" :segmented="true" mt-15 rounded-10>
      <template #footer>
        <div flex flex-row justify-center>
          <n-el v-if="playerType === 1" :style="{ width: '70%' }">
            <div ref="videoRef"></div>
          </n-el>
          <n-el v-if="playerType === 2" :style="{ width: '70%' }">
            <div>
              <iframe
                :src="src"
                frameborder="0"
                scrolling="no"
                referrerpolicy="origin-when-cross-origin"
                allowfullscreen="true"
                security="restricted"
                sandbox="allow-same-origin allow-forms allow-scripts"
                :style="{ width: '100%', height: '450px' }"
              ></iframe>
            </div>
          </n-el>
        </div>
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
                @click="changeMovie(item.player, source.playUrl)"
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
import { isNull, isWhitespace } from '~/src/utils'

onMounted(() => {
  createDPlayer()
  createPlaylist()
})

// 使用播放器类型
const playerType = ref(1)

// 创建dp播放器
const dp = ref()
const videoRef = ref()
function createDPlayer() {
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

// 第三方播放器链接
const src = ref('')

// 选择影片和播放器
const movie = ref({})
function changeMovie(player, url) {
  if (isWhitespace(player) || isNull(player)) {
    playerType.value = 1
    createDPlayer()
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
    return
  }
  playerType.value = 2
  src.value = player + url
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
