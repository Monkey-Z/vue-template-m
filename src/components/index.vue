<template>
  <div>
    <h2>Welcome</h2>
    <div class="weatherInfo" v-if="weatherInfo">
      <p>{{ `${weatherInfo.country} - ${weatherInfo.city}` }}</p>
      <p>{{ `${weatherInfo.data[0].date} ${weatherInfo.data[0].week} ` }}</p>
      <p>{{ `气温： ${weatherInfo.data[0].tem1} ~ ${weatherInfo.data[0].tem2} 实时：${weatherInfo.data[0].tem}` }}</p>
      <p>{{ `${weatherInfo.data[0].wea} ${[...weatherInfo.data[0].win].join('')} ${weatherInfo.data[0].win_speed}` }}</p>
    </div>
  </div>
</template>

<script>
import { weather } from '@/api/test'
export default {
  name: 'Index',
  data () {
    return {
      weatherInfo: false
    }
  },
  created () {
    weather()
      .then(res => {
        this.weatherInfo = res
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
<style lang='scss' scoped>
</style>
