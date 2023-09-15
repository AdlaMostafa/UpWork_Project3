'uses client'
import React from 'react'
import Image from 'next/image'
import visit from '../../../../../../../public/assets/SocialMedia/visit.png'
import { Link } from '@mui/material'
import { linkData } from '../../../../../../mock/linksData'
import { StyledLinksSection } from './style'

interface LinkItem {
  id: number;
  name: string;
}

const LinksSection: React.FC = () => {
  return (
    <StyledLinksSection>
      {linkData.map((item: LinkItem) => (
        <div key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
          <Link href='#' style={{ color: "black", marginRight: '8px' }}>{item.name}</Link>
          <Image src={visit} alt='visit' width={16} height={16} />
        </div>
      ))}
    </StyledLinksSection>
  )
}

export default LinksSection
