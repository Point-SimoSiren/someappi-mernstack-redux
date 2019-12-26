import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import ProfileItem from './ProfileItem'
import { getProfiles } from '../../actions/profile'

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles()
  }, [getProfiles])

  return (
    <Fragment>
      {loading ? (<div>
        <p>Haetaan tietoja...</p>
        <Spinner /></div>
      ) : (
          <Fragment>
            <h1 className='large text-primary'>Kehittäjät</h1>
            <p className='lead'>
              <i className='fab fa-connectdevelop' /> Verkostoidu muiden kehittäjien kanssa
          </p>
            <div className='profiles'>
              {profiles.length > 0 ? (
                profiles.map(profile => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))
              ) : (
                  <h4>Ei profiileja vielä...</h4>
                )}
            </div>
          </Fragment>
        )}
    </Fragment>
  )
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles)
