import React from 'react'

const key = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

const toBase62 = assetId => {
  let d = assetId
  let arr = []
  while (d) {
    arr.push(key[d % 62])
    d = Math.floor(d / 62)
  }
  return arr.join('').padEnd(6, '0')
}

const toCdnUri = assetId => `https://c.stocksy.com/a/${toBase62(assetId)}/z9/${assetId}.jpg`

const CDNImage = ({ assetId, alt = '' }) => <img src={toCdnUri(assetId)} alt={alt} />

export default CDNImage
