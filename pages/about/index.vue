<template>
  <main class="grid boxed">
    <h1 class="section-title">About Me</h1>
    <about-opener :about="about" :image="image" />
    <about-technologies :technologies="technologies" />
    <about-expertise :expertises="expertises" />
  </main>
</template>
<script>
export default {
  data() {
    return {
      about: '',
      image: '',
      technologies: [],
      expertises: [],
    }
  },
  async fetch() {
    /**
     * Endpoint to fetch data from for this page
     * @const { string } _endpoint
     */
    const _endpoint = 'about'
    /**
     * Response received from API
     * @const { Object } _response
     */
    const _response = await fetch(
      `${process.env.API_BASE_URL}/${_endpoint}`
    ).then((_raw) => _raw.json())
    /**
     * Container for text extracted from response
     * @const { string } _about
     */
    const _about = _response.aboutMe
    /**
     * Container for image details extracted from response
     * @const { Object } _image
     */
    const _image = {
      width: _response.aboutImage.width,
      height: _response.aboutImage.height,
      formats: {
        thumbnail: {
          width: _response.aboutImage.formats.thumbnail.width,
          url: _response.aboutImage.formats.thumbnail.url,
        },
        large: {
          width: _response.aboutImage.formats.large.width,
          url: _response.aboutImage.formats.large.url,
        },
        medium: {
          width: _response.aboutImage.formats.medium.width,
          url: _response.aboutImage.formats.medium.url,
        },
        small: {
          width: _response.aboutImage.formats.small.width,
          url: _response.aboutImage.formats.small.url,
        },
      },
    }
    /**
     * Container for technologies related details extracted from response
     * @const { Object[] } _technologies
     */
    const _technologies = _response.technologies.map((_item) => {
      return {
        name: _item.technologyName,
        image: _item.icon.url,
      }
    })
    /**
     * Container for expertise related details extrated from response
     * @const { Object[] } _expertise
     */
    const _expertises = _response.otherExpertise

    /**
     * Assign processed data to component's state
     */
    this.about = _about
    this.image = _image
    this.technologies = _technologies
    this.expertises = _expertises
  },
}
</script>
