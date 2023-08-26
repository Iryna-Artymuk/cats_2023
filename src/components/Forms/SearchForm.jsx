import React from 'react'
import { LinkWrapper, SerchFormWrapper, StyledForm, StyledLink } from './StyledSearchForm'

const SearchForm = () => {
  return (
    <SerchFormWrapper>
    <StyledForm>
      <input type="text" placeholder="Search for breeds by name" />
      <button title="search" type="submit">
        <svg width={20} height={20}>
          <use
            xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-search`}
          />
        </svg>
      </button>
    </StyledForm>

    <LinkWrapper>
      <StyledLink to={''}>
        <svg>
          <use
            xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-smileFace`}
          />
        </svg>
      </StyledLink>
      <StyledLink to={''}>
        <svg>
          <use
            xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-Heart`}
          />
        </svg>
      </StyledLink>
      <StyledLink to={""}>
        <svg>
          <use
            xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-sadFace`}
          />
        </svg>
      </StyledLink>
    </LinkWrapper>
  </SerchFormWrapper>
  )
}

export default SearchForm
