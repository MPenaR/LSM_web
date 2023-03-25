This is a repository for the animations of the LSM

The LSM solutions seem to be very independent to the value of R of the measuring antennas, at least as long as the antennas are not inside the target. This can be seen [here](./Phantom/R_sweep/test_slider.html).

On the other hand, when taking into account the regularization parameter $\alpha$, different frequecies are more sensitive at different values. Take a look at these results for the different targets:

 - [two Nylon cylinders](./Nylon-Cyls/alpha_sweep/test_slider.html)

 - [4 in Nylon cylinder](./Nylon-4.0/alpha_sweep/test_slider.html)

 - [Phantom dielectric target](./Phantom/alpha_sweep/test_slider.html)

 - [2 in steel cylinder](./Metal-2.0/alpha_sweep/test_slider.html) 

Finally, if we use Morozov regularization, it seems that the results tend to a limit when decreasing the noise level $\delta$. This can be seen in [here](./Delta_sweep/Two-Cyls2/test_slider.html)


Last update: I've added a [sweep in the gamma](./gamma_sweep/4inCyl/test_slider.html) for the modified far field pattern.