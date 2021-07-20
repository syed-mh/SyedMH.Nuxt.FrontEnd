<template>
  <div class="app-content">
    <app-header />
    <main class="grid boxed">
      <page-title title="Projects" />
      <div class="grid">
        <projects-sidebar :widgets="widgets" />
        <nuxt />
      </div>
    </main>
    <app-footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      widgets: {
        projectTypes: {
          title: 'Project Types',
          slug: 'project-type',
          data: [],
        },
        projectCategories: {
          title: 'Project Categories',
          slug: 'project-category',
          data: [],
        },
        technologies: {
          title: 'Technologies',
          slug: 'technology',
          data: [],
        },
      },
    }
  },
  async fetch() {
    const _technologies = await fetch(
      `${process.env.API_BASE_URL}/technologies`
    ).then((_response) => _response.json())
    const _projectTypes = await fetch(
      `${process.env.API_BASE_URL}/project-types`
    ).then((_response) => _response.json())
    const _projectCategories = await fetch(
      `${process.env.API_BASE_URL}/project-categories`
    ).then((_response) => _response.json())
    this.widgets.technologies.data = _technologies.sort((current, next) => {
      const _currentCount = current.projects.length
      const _nextCount = next.projects.length
      if (_currentCount === _nextCount) return 0
      return _currentCount > _nextCount ? -1 : 1
    })
    this.widgets.projectTypes.data = _projectTypes.sort((current, next) => {
      const _currentCount = current.projects.length
      const _nextCount = next.projects.length
      if (_currentCount === _nextCount) return 0
      return _currentCount > _nextCount ? -1 : 1
    })
    this.widgets.projectCategories.data = _projectCategories.sort(
      (current, next) => {
        const _currentCount = current.projects.length
        const _nextCount = next.projects.length
        if (_currentCount === _nextCount) return 0
        return _currentCount > _nextCount ? -1 : 1
      }
    )
  },
}
</script>
<style lang="scss" scoped src="./project-archive.scss" />
