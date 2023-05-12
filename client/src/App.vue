<template>
  <div id="app">
    <MainHeader />
    <b-container>
    <b-row>
      <b-col md="4"><SideNav /></b-col>
      <b-col md="8"><MovieList /></b-col>
    </b-row>
</b-container>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader"
import SideNav from "@/components/SideNav"
import MovieList from "@/components/MovieList"

export default {
  name: 'App',
  components: {
    MainHeader,
    SideNav,
    MovieList
  }
}
</script>

<style>
</style>
