import React from 'react'
// @generated: @expo/next-adapter@2.1.5
import { StyleSheet,Text} from 'react-native'

import Page from '../components/page/Page'
import { H1 } from '../components/webElements'
import VideoPlayer from '../components/VideoPlayer'

import { config } from '../config/config'

export default function StartPage () {
  return (
    <Page>
      <H1 style={styles.h1}>Tarritos de miel para celebraciones</H1>
      <Text style={styles.text}>Es un producto de {config.appName}</Text>
      <Text style={styles.text}>{config.appTagline}</Text>
      <VideoPlayer
        videoUrl='https://fisicayquimica2.s3.eu-west-3.amazonaws.com/tarritos-de-miel.mp4'
      />
      <Text style={styles.text}>Más información en</Text>
      <Text style={styles.text}>https://www.apicazorla.com</Text>
    </Page>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 8
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 12
  }
  })
