// @ts-check

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist The playlist to remove duplicates from
 *
 * @returns {string[]} The new playlist with unique entries
 */
export function removeDuplicates(playlist) {
    return [...new Set(playlist)];
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist The playlist to check
 * @param {string} track The track to check for
 *
 * @returns {boolean} Whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
    return new Set(playlist).has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist The playlist to add to
 * @param {string} track The track to add
 *
 * @returns {string[]} The new playlist
 */
export function addTrack(playlist, track) {
    const newPlaylist = new Set(playlist);
    newPlaylist.add(track);

    return Array.from(newPlaylist);
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist The playlist to delete from
 * @param {string} track The track to delete
 *
 * @returns {string[]} The new playlist
 */
export function deleteTrack(playlist, track) {
    const newPlaylist = new Set(playlist);
    newPlaylist.delete(track);

    return Array.from(newPlaylist);
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist The playlist to check
 *
 * @returns {string[]} The list of artists
 */
export function listArtists(playlist) {
    const artists = new Set();

    playlist.forEach((track) => {
        const artist = track.split(' - ').pop();
        artists.add(artist);
    });

    return Array.from(artists);
}
